import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('About')}
        </div>
    );
};

export default About;
