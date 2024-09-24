import { useTranslation } from 'react-i18next';
// eslint-disable-next-line zerg314-plugin/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary/ui/BugButton';
import { Page } from '@/widgets/Page';

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
