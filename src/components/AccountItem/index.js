import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f5c32ee86caee4870373735afd2eea18~c5_300x300.webp?x-expires=1656640800&x-signature=7UmtYht%2FeyHgWtyG%2FD%2BUEMwSCZI%3D"
                alt="huyen"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>AnNV23</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Nguyen Van An</span>
            </div>
        </div>
    );
}

export default AccountItem;
