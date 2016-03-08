import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChessActions from '../actions/ChessActions';
import styles from '../../css/app.css';

class Field extends Component {

  render() {
    return (
      <div className={(this.isBlack(this.props.coordinate) ? styles.black : styles.white)}>
        {this.props.coordinate}
      </div>
    );
  }

  isBlack(coordinate) {

    const collsIndex = { 'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7 };
    const rowsIndex = { '8':0, '7':1, '6':2, '5':3, '4':4, '3':5, '2':6, '1':7 };

    let collNumber = collsIndex[coordinate[0]];
		let rowNumber = rowsIndex[coordinate[1]];

		return (rowNumber % 2 == 0 && collNumber % 2 == 0) || (rowNumber % 2 == 1 && collNumber % 2 == 1);
	}

}

export default connect(state => state.Sample)(Field)
