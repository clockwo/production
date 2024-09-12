import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    return (
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>Вернуться к постам</Button>
    );
};
