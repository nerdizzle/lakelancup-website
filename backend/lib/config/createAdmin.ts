import bcrypt, { hash } from 'bcrypt'

export interface ISaltInput {
    saltRounds: Number
}
export interface ISaltOutput {
    salt: string,
}

export interface IHashInput {
    salt: string,
    password: string,
}

export interface IHashOutput {
    salt: string,
    hash: string
}

const name = "admin"; //process.argv[2];
const password = "lakelandcup";//process.argv[3];
const saltRounds = 10;

// first generate a random salt
export const genSalt = async (saltRounds : Number) : Promise<ISaltOutput> =>  {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    salt: salt,
                });
            }
        });
    });
}
  
// hash the password with the salt
export const genHash =  async (input : IHashInput)  : Promise<IHashOutput>=> {
    return new Promise((resolve, reject) => {
        bcrypt.hash(input.password, input.salt, function(err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    salt: input.salt,
                    hash: hash
                });
            }
        });
    });
}

const createAdmin = async () => {
    const saltRes = await genSalt(saltRounds)
    const passwordRes = await genHash({salt: saltRes.salt, password: password});
    const user = {
        "username": name,
        "password": password,
        "hash": passwordRes.hash,
        "salt": passwordRes.salt
    }
    //console.log(user);
    return user;
}
export default createAdmin;

//create();