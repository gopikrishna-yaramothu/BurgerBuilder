import React,{Component} from 'react';
import Model from '../../components/UI/Model/Model';
import Aux from '../Aux/Aux';

const WithErrorHandler = (WrappedComponent,axios) => 
{
    return class extends Component {
        state = {
            error : null
        }
        componentWillMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req;
            })
            axios.interceptors.response.use(null,error => {
                this.setState({error:error})
            })
        }
        errorConfirmed = () =>
        {
            this.setState({error:null})
        }
        render()
        {
            return (
                <Aux>
                <Model show={this.state.error}
                        clicked={this.errorConfirmed}>
                    {this.state.error ? this.state.error.message : null}
                </Model>
                <WrappedComponent {...this.props} />
            </Aux>
            );
        }
    }
}

export default WithErrorHandler;