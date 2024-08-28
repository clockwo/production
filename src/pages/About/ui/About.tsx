import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Page } from 'shared/ui/Page/Page';

const About = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('About')}
        </Page>
    );
};

export default About;
