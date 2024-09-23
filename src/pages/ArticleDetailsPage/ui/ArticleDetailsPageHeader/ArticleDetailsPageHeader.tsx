import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getRouteArticle } from '@/shared/const/router';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(getRouteArticle());
    }, [navigate]);

    return (
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>Вернуться к постам</Button>
    );
};
