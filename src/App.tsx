import * as React from "react";
import {useObserver} from "mobx-react";
import {makeStyles} from "@material-ui/core/styles";
import {IClassProps, IEssenceTheme} from "@essence-community/constructor-share/types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {parseMemoize} from "@essence-community/constructor-share/utils";

const useStyles = makeStyles(
    (theme: IEssenceTheme) => ({
        root: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.type === "dark" ? theme.palette.common.white : theme.palette.common.black,
        },
    }),
    {name: "PresentationApp"},
);

const App: React.FC<IClassProps> = (props: IClassProps) => {
    const {bc, pageStore} = props;
    const parser = parseMemoize(bc.getglobal);
    const classes = useStyles();

    function handleClick(event: React.SyntheticEvent) {
        event.preventDefault();

        pageStore.applicationStore.redirectToAction("2", {});
    }

    return useObserver(() => (
        <Card className={classes.root}>
            <CardContent>
                <Typography>Глобальная переменная: {bc.getglobal}</Typography>
                {bc.getglobal ? (
                    <Typography>Глобальное значение: {parser.runer(pageStore.globalValues)}</Typography>
                ) : null}
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="small" color="secondary">
                    Перейти на страницы
                </Button>
            </CardActions>
        </Card>
    ));
};

export default App;
