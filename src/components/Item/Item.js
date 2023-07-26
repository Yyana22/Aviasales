import { connect } from 'react-redux';

import classes from './Item.module.scss';

const Item = (props) => {
  const { carrier, price, segments } = props.props;
  const countStops = (length) => {
    switch (true) {
      case length > 1:
        return 'пересадки';
      case length == 1:
        return 'пересадка';
      case length == 0:
        return 'без пересадок';
    }
  };
  const time = (mitutes) => {
    let hours = Math.floor(mitutes / 60);
    let min = mitutes % 60;
    return `${hours}ч ${min}м`;
  };

  const sumDate = (dateOut, min) => {
    const date = new Date(dateOut);
    const start = new Date(date.getTime());
    const end = new Date(date.getTime() + min * 60000);
    return `${start.toISOString().slice(11, 16)} - ${end.toISOString().slice(11, 16)}`;
  };
  return (
    <div className={classes.item}>
      <div className={classes['item-saleLogo']}>
        <div>{price} р</div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={classes['item-body']}>
        <div>
          <div className={classes['item-body-head']}>
            <div className={classes['item-body-way']}>{`${segments[0].origin} - ${segments[0].destination}`}</div>
            <div>в пути</div>
            <div className={classes['item-body-transfers-count']}>
              {segments[0].stops.length ? segments[0].stops.length : null} {countStops(segments[0].stops.length)}
            </div>
          </div>
          <div className={classes['item-body-info']}>
            <div className={classes['item-body-time']}>
              {segments[0].date ? sumDate(segments[0].date, segments[0].duration) : null}
            </div>
            <div>{time(segments[0].duration)}</div>
            <div className={classes['item-body-transfers-count']}>{segments[0].stops.join(', ')}</div>
          </div>
        </div>
        <div>
          <div className={classes['item-body-head']}>
            <div className={classes['item-body-way']}>{`${segments[0].origin} - ${segments[0].destination}`}</div>
            <div>в пути</div>
            <div className={classes['item-body-transfers-count']}>
              {segments[1].stops.length ? segments[1].stops.length : null} {countStops(segments[1].stops.length)}
            </div>
          </div>
          <div className={classes['item-body-info']}>
            <div className={classes['item-body-time']}>
              {segments[1].date ? sumDate(segments[1].date, segments[1].duration) : null}
            </div>
            <div>{time(segments[1].duration)}</div>
            <div className={classes['item-body-transfers-count']}>{segments[1].stops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Item);
