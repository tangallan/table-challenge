import React, { Component } from 'react';
import { connect } from 'react-redux';

import cssClasses from './PeopleDataTable.module.css';
import * as actions from '../../store/actions';

import PeopleDataHeader from '../../components/PeopleDataHeader/PeopleDataHeader';
import PeopleDataRow from '../../components/PeopleDataRow/PeopleDataRow';

import { HTMLTable, Spinner } from '@blueprintjs/core';

class PeopleDataTable extends Component {
    
    state = {
    };

    componentDidMount() {
        this.props.onLoadingPeople();
    }

    render() {
        if(this.props.loading) {
            return <div className={cssClasses.mt10}>
                <Spinner size={100} />
            </div>
        }
        
        return <HTMLTable>
            <PeopleDataHeader headers={this.props.headers} onSortData={this.onSortingData} />
            <PeopleDataRow headers={this.props.headers} data={this.props.people} />
        </HTMLTable>
    }

    onSortingData = (header) => {
        this.props.onSortPeople(header);
    }
}

const mapStateToProps = state => {
    return {
        loading: state.people.loading,
        people: state.people.people,
        error: state.people.error,
        headers: state.people.headers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadingPeople: () => dispatch(actions.peopleFetchStart()),
        onSortPeople: (header) => dispatch(actions.startPeopleSort(header))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleDataTable);
