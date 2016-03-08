import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChessActions from '../actions/ChessActions';
import styles from '../../css/app.css';
import Board from './Board';

class Chess extends Component {

  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(ChessActions, dispatch);
    return (
      <main>
        <div>
          <h1 className={styles.text}>Chess with Redux</h1>
          <span>Rules:
            <a href="https://en.wikipedia.org/wiki/Chess" target="_blank">
              &nbsp;Wikipedia
            </a>
          </span>
        </div>
        <div className={styles.text}>
          Player: <span className={styles.name}>{title}&nbsp;</span>
          <button onClick={e => actions.changeTitle(prompt())}>
            change name
          </button>
        </div>
        <Board />
      </main>
    );
  }
}

export default connect(state => state.Sample)(Chess)
