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
                src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
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
