// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {HttpErrors} from '@loopback/rest';
import {Credentials, RawdataUserRepository} from '../repositories/rawdata-user.repository';
import {RawdataUser} from '../models/rawdata-user.model';
import {UserService} from '@loopback/authentication';
import {UserProfile, securityId} from '@loopback/security';
import {repository} from '@loopback/repository';
import {PasswordHasher} from './hash.password.bcryptjs';
import {PasswordHasherBindings} from '../keys';
import {inject} from '@loopback/context';

export class MyUserService implements UserService<RawdataUser, Credentials> {
  constructor(
    @repository(RawdataUserRepository) public userRepository: RawdataUserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<RawdataUser> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });
    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    const credentialsFound = await this.userRepository.findById(
      foundUser.id,
    );

    if (!credentialsFound) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      credentialsFound.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  convertToUserProfile(user: any): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.username) userName = `${user.username}`;
    if (user.lastName)
      userName = user.firstName
        ? `${userName} ${user.lastName}`
        : `${user.lastName}`;
    const userProfile = {
      [securityId]: user.id,
      name: userName,
      id: user.id,
      roles: user.role_id,
    };

    return userProfile;
  }
}
