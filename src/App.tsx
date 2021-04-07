import * as React from "react";
import {useObserver} from "mobx-react";
import {IClassProps} from "@essence-community/constructor-share/types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const App: React.FC<IClassProps> = (props: IClassProps) => {
    const {bc, pageStore} = props;

    return useObserver(() => (
        <Card>
            <CardContent>
                <Typography>Глобальная переменная: {bc.getglobal}</Typography>
                {bc.getglobal ? (
                    <Typography>Глобальное значение: {pageStore.globalValues.get(bc.getglobal)}</Typography>
                ) : null}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Перейти на страницы
                </Button>
            </CardActions>
        </Card>
    ));
};

export default App;
