import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            timezone: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirm</label>
                    <input
                        value={this.state.passwordConfirm}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select
                        onChange={this.onChange}
                        name="timezone"
                        className="form-control"
                        value={this.state.timezone}
                    >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign up</button>
                </div>
            </form>
        );
    }

}

export default SignupForm;