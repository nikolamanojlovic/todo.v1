import { makeStyles } from "@material-ui/core";

export const useSpaceStyles = makeStyles((theme) => ({
    // PAGE:
    root: {
        width: '80%',
        height: '800px',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '2px 2px 15px rgba(20,20,20,0.1)',
    },
    lists: {
        float: 'left',
        minHeight: '100%',
        width: '30%',

        display: '-ms-flexbox',
        display: '-webkit-flex',
        display: 'flex',
        flexDirection: 'column',
        msFlexDirection: 'column',
        WebkitFlexDirection: 'column',

    },

    // EDITOR:
    editor: {
        float: 'left',
        minHeight: '100%',
        width: '70%',
        backgroundColor: theme.palette.secondary.main,


        display: '-ms-flexbox',
        display: '-webkit-flex',
        display: 'flex',
        flexDirection: 'column',
        msFlexDirection: 'column',
        WebkitFlexDirection: 'column',

        overflow: 'none'
    },
    editorEmpty: {
        float: 'left',
        minHeight: '100%',
        width: '70%',
        backgroundColor: theme.palette.secondary.main,


        display: '-ms-flexbox',
        display: '-webkit-flex',
        display: 'flex',
        flexDirection: 'column',
        msFlexDirection: 'column',
        WebkitFlexDirection: 'column',

        justifyContent: 'center',
        alignItems: 'center'
    },
    todoListHeadline: {
        marginLeft: '1em',
        marginTop: '0.5em'
    },
    todoListHeadlineInput: {
        marginTop: '1em',
        fontSize: '1.5em',
        width: '95%'
    },
    divider: {
        marginTop: '1em',
        marginBottom: '1em',
        width: '95%'
    },
    todoListControls: {
        marginRight: '1em',
        textAlign: 'right',
    },
    controlButtons: {
        marginTop: '2em',
    },
    todoListTasks: {
        maxHeight: '37em',
        minHeight: '37em',
        marginLeft: '1em',
        flexWrap: 'wrap',
        overflowY: 'scroll'
    },
    task: {
        width: '95%',
        margin: '0.5em 0',
        backgroundColor: theme.palette.primary.main,

        display: '-ms-flexbox',
        display: '-webkit-flex',
        display: 'flex',
        flexDirection: 'row',
        msFlexDirection: 'row',
        WebkitFlexDirection: 'row',

        alignItems: 'center'
    },
    taskDescription: {
        display: 'inline-block',
        marginLeft: '1em',
        flexGrow: 1,
        color: theme.palette.secondary.main,
    },
    taskBtn: {
        color: theme.palette.secondary.main
    },

    // LISTS: 
    todos: {
        WebkitFlexGrow: 1,
        flexGrow: 1,
        padding: '1em',
    
        textAlign: 'center',
        alignItems: 'center',

        display: 'flex',

        flexDirection: 'column',
        msFlexDirection: 'column',
        WebkitFlexDirection: 'column',
    },
    todoBtn: {
        margin: '0.5em 0',
        width: '100%',
    },
    control: {
        display: 'block',
        textAlign: 'center'
    },
    createBtn: {
        margin: '2em'
    },

    // SEARCH
    search: {
        position: 'relative',
        margin: '2em auto',
        width: '80%',
        backgroundColor: theme.palette.secondary.main
    },
    searchIcon: {
        position: 'absolute',
        paddingLeft: '0.1em',
        justifyContent: 'center',
        height: '100%',
        color: theme.palette.primary.main
    },
    searchInput: {
        paddingLeft: '2em',
        height: '100%',
        width: '100%'
    }
}));