
import config from '../../config';
import { TStudent } from '../student/student.Interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/student.modle';

//creat student
const createNewStudent = async (password: string, payload: TStudent) => {
  // create object
  const userData: Partial<TUser> = {};

  //    set password in created new obj.
  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  
  const newUser = await User.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    (payload.id = newUser.id), (payload.user = newUser._id);

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userService = {
  createNewStudent,
};
