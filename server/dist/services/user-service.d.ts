import { Credentials, RawdataUserRepository } from '../repositories/rawdata-user.repository';
import { RawdataUser } from '../models/rawdata-user.model';
import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { PasswordHasher } from './hash.password.bcryptjs';
export declare class MyUserService implements UserService<RawdataUser, Credentials> {
    userRepository: RawdataUserRepository;
    passwordHasher: PasswordHasher;
    constructor(userRepository: RawdataUserRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: Credentials): Promise<RawdataUser>;
    convertToUserProfile(user: any): UserProfile;
}
