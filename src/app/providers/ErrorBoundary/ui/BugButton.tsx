import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/depricated/Button';

// For test ErrorBoundary case
export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={() => setError(!error)}>
            {t('Trow Error')}
        </Button>
    );
};
