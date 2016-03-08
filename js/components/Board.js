import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChessActions from '../actions/ChessActions';
import styles from '../../css/app.css';
import Field from './Field';


const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const colls = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class Board extends Component {

  render() {
    return (
      <div className={styles.chessboard}>
      {rows.map((row) =>
        <div key={row} className={styles.row}>
        {colls.map((coll) => {
          let coordinate = coll.toString() + row.toString();
          return <Field key={coordinate} coordinate={coordinate}>
          {coordinate}
          </Field>
        })}
        </div>
      )}
      </div>
    );
  }

}

export default connect(state => state.Sample)(Board)
