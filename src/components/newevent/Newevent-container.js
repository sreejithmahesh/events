import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../header/Header-component';
import Cordinator from '../cordinator-component/Cordinator-component';
import About from '../about-component/About-component';
import When from '../when-Component/When-component';
import Button from '../shared/button/Button';
import * as actions from '../../actions/Newevent-action';
import './newevent.scss';
import Card from '../shared/card/card';

class NewEventContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characterCount: 1,
            pbData: {},
            showSuccess: false,
            fields: {},
            errors: {}
        };
    }

    componentDidMount() {
        this.props.actions.getResponsibleList();
        this.props.actions.getCategoryList();
        this.props.actions.getTitleList();
    }

    handleInputChange = (event) => {
        const target = event.target;
        let name = target.name;
        let characterCount = '';
        if (name === 'description') {
            //debugger;
            characterCount = target.value.length
        }
        this.setState(prevState => {
            let pbData = Object.assign({}, prevState.pbData);
            pbData[name] = target.value;
            const state = {
                pbData,
                characterCount
            }
            return state
        })
    }
    validateForm() {
        let fields = this.state.pbData;
        let errors = {};
        let formIsValid = true;

        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "*Please enter your title.";
        }
        else {
            if (this.props.titleData && this.props.titleData.filter(e => e.title === fields["title"]).length > 0) {
                formIsValid = false;
                errors["title"] = "*This title already exists, please enter a new title.";
            }
        }
        if (!fields["description"]) {
            formIsValid = false;
            errors["description"] = "*Please enter your description.";
        }
        if (!fields["responsible"]) {
            formIsValid = false;
            errors["responsible"] = "*Please enter your coordinator.";
        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
        if (typeof fields["email"] !== "undefined") {

            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    publish = () => {
        console.log(this.validateForm());
        if (this.validateForm()) {
            this.props.actions.publishAction(this.state.pbData);
            this.setState({ showSuccess: !this.state.showSuccess });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.publishedData !== this.props.publishedData) {
            console.log(this.props.publishedData)
        }
    }
    render() {
        const { responsibleList, categorylist } = this.props;
        const { showSuccess, errors, characterCount } = this.state;
        return (

            <div className="container">
                {showSuccess ? (<div>
                    <Card title="Success">
                        <div className="field-container">
                            Event has been created
                        </div>
                    </Card>
                </div>) : (<div className="container">
                    <div>
                        <Header />
                    </div>
                    <form className="event-form">
                        <About errors={errors} onChange={this.handleInputChange} categorylist={categorylist} count={characterCount}></About>
                        <Cordinator errors={errors} onChange={this.handleInputChange} responsibleList={responsibleList}></Cordinator>
                        <When errors={errors} onChange={this.handleInputChange}></When>
                        <div className="publish-btn-con">
                            <Button label="Publish" click={this.publish} className="publish-btn"></Button>
                        </div>
                    </form>
                </div>)}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        categorylist: state.categoryList,
        responsibleList: state.responsibleList,
        publishedData: state.publishedData,
        titleData: state.titleData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewEventContainer);