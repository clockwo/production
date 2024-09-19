import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary/ui/BugButton';
import { Page } from '@/widgets/Page/ui/Page';

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
