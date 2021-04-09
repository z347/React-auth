import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { registrationRequest } from 'redux/actions/sign-up.action';
import { IRegistrationArguments } from 'types/handlers/registration-arguments';
import './styles.css';

const SignUpForm: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<IRegistrationArguments>();

  const onSubmit = handleSubmit(async (data, event: any) => {
    event.preventDefault();
    dispatch(registrationRequest(data));
  });

  return (
    <>
      <h1 className="display-2">Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              ref={register({ required: true })}
              name="name"
              type="text"
              className="form-control"
              id="name"
            />
            {errors.name && <div className="alert alert-danger">Enter your name</div>}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              ref={register({ required: true })}
              name="email"
              type="email"
              className="form-control"
              id="email"
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

export { SignUpForm };
