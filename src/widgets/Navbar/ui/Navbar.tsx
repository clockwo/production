import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <LoginModal />
        </div>
    </div>
);
