import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { authRequest } from 'redux/actions/sign-in.action';
import { ILoginArguments } from 'types/handlers/login-arguments';
import './styles.css';

const SignInForm: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<ILoginArguments>();

  const onSubmit = handleSubmit(async (data, event: any) => {
    event.preventDefault();
    dispatch(authRequest(data));
  });

  return (
    <>
      <h1 className="display-2">Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              ref={register({ required: true })}
              name="email"
              type="email"
              className="form-control"
              id="email"
              defaultValue="test@mail.com"
            />
            {errors.email && <div className="alert alert-danger">Enter your email</div>}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              ref={register({ required: true })}
              name="password"
              type="password"
              className="form-control"
              id="password"
              defaultValue="accaQR31$@!va"
            />
            {errors.password && <div className="alert alert-danger">Enter your password</div>}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export { SignInForm };
