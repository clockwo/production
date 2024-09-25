import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

const Profile = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    if (!id) {
        return (
            <Page>
                <Text text={t("This profile doesn't exists")} />
            </Page>
        );
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
};
export default Profile;
