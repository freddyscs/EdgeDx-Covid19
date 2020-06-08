import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RawdataUser } from '../models';
import { RawdataUserRepository } from '../repositories';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
import { TokenService } from '@loopback/authentication';
import { Credentials } from '../repositories/rawdata-user.repository';
import { UserService } from '@loopback/authentication';
export declare class RawdataUserController {
    rawdataUserRepository: RawdataUserRepository;
    passwordHasher: PasswordHasher;
    jwtService: TokenService;
    userService: UserService<RawdataUser, Credentials>;
    constructor(rawdataUserRepository: RawdataUserRepository, passwordHasher: PasswordHasher, jwtService: TokenService, userService: UserService<RawdataUser, Credentials>);
    create(rawdataUser: Omit<RawdataUser, 'id'>): Promise<RawdataUser>;
    count(where?: Where<RawdataUser>): Promise<Count>;
    find(filter?: Filter<RawdataUser>): Promise<RawdataUser[]>;
    updateAll(rawdataUser: RawdataUser, where?: Where<RawdataUser>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<RawdataUser>): Promise<RawdataUser>;
    updateById(id: number, rawdataUser: RawdataUser): Promise<void>;
    replaceById(id: number, rawdataUser: RawdataUser): Promise<void>;
    deleteById(id: number): Promise<void>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
}
