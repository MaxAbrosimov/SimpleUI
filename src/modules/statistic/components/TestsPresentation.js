import React, {Component} from 'react';
import '../styles.css'
import {Dimmer, List, Loader} from "semantic-ui-react";
import TestPresentation from './TestPresentation';
import '../styles.css';

class TestsPresentation extends Component {
    constructor(){
        super();
        this.state = {
            opened: []
        }
    }

    onClickItem(endId) {
        let opened = this.state.opened;
        const itemClicked = opened.includes(endId);
        if (itemClicked) {
            opened = opened.filter(v => v !== endId);
        } else {
            opened.push(endId);
            this.props.loadEnvironmentTestData(endId);
        }
        this.setState({opened});
    }



    render() {
        const {environment, isFetching, isLoaded} = this.props;
        const showComponent = !isFetching && isLoaded;
        return (
            <div>
                <Dimmer active={!showComponent}>
                    <Loader active={!showComponent}/>
                </Dimmer>
                {showComponent &&
                    (<List divided relaxed className="Margin-Auto">
                        {
                            environment.map(e => {
                                return (
                                    <List.Item key={e.envId}>
                                        <div onClick={() => this.onClickItem(e.envId)}>
                                            {e.name}
                                        </div>
                                        {this.state.opened.includes(e.envId) &&
                                            (<div className="Env-test-item">
                                                <TestPresentation
                                                    key={e.envId + "presentation"}
                                                    chartData={e.chartData}
                                                    lineData={e.lineData}
                                                    isFetching={e.isFetching}
                                                    height={100}
                                                />
                                            </div>)
                                        }
                                    </List.Item>
                                )
                            })
                        }
                    </List>)
                }
            </div>
        );
    }
}



export default TestsPresentation;