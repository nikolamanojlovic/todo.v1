import { useContext } from 'react';
import Header from '../components/Header';
import Space from '../components/Space';
import { ThemeContext } from '../contexts/contexts';
import { useHomePageStyles } from '../style/homepage';

export default function HomePage() {
    const classes = useHomePageStyles(useContext(ThemeContext))

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.space}>
                <Space/>
            </div>
        </div>
    );
}