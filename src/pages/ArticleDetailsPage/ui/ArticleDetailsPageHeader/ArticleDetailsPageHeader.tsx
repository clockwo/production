import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRouteArticle } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(getRouteArticle());
    }, [navigate]);

    return (
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>Вернуться к постам</Button>
    );
};
