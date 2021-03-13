import React, {useContext, useEffect} from 'react';
import Header from '../components/layout/Header';
import tareaContext from '../context/operaciones/operacionesContext';
import AlertaContext from '../context/alertas/alertaContext';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.success.light,
      color: theme.palette.common.white,
      fontSize: 25
    },
    body: {
      fontSize: 20,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 0,
    },
  });

const Home = () => {

    const classes = useStyles();

    // extraer states
    const tareasContext = useContext(tareaContext);
    const { operaciones, msg, getOperaciones, balance, getBalance} = tareasContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        // si hay un error
        if(msg) {
            mostrarAlerta(msg.msg, msg.categoria);
        }

        getOperaciones();
        getBalance();
        // eslint-disable-next-line
    }, [msg]);    

    return (
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="contenedor-tareas">
                        {balance > 0 
                            ? <h2 className = "positivo">Balance Actual: ${balance} </h2>
                            : <h2 className = "negativo">Balance Actual: ${balance} </h2>
                        }

                        <TableContainer component={Paper}> 
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Concepto</StyledTableCell>
                                    <StyledTableCell align="right">Monto</StyledTableCell>
                                    <StyledTableCell align="right">Categoria</StyledTableCell>
                                    <StyledTableCell align="right">Tipo</StyledTableCell>
                                    <StyledTableCell align="right">Fecha</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                    operaciones.map(operacion => (
                                        <StyledTableRow key={operacion.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {operacion.concepto}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{operacion.monto}</StyledTableCell>
                                        {operacion.tipo > 0
                                          ?<StyledTableCell align="right">Ingreso</StyledTableCell>
                                          :<StyledTableCell align="right">Egreso</StyledTableCell>
                                        }
                                        {operacion.categoria === 1
                                          ?<StyledTableCell align="right">Sueldo</StyledTableCell>
                                          :operacion.categoria === 2 ? <StyledTableCell align="right">Extras</StyledTableCell>
                                          :operacion.categoria === 3 ? <StyledTableCell align="right">Casa</StyledTableCell>
                                          :operacion.categoria === 4 ? <StyledTableCell align="right">Comida</StyledTableCell>
                                          :<StyledTableCell align="right">Antojos</StyledTableCell>
                                        }
                                        <StyledTableCell align="right"><Moment format="DD-MM-YYYY">{operacion.createdAt}</Moment></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </main>
            </div>
        </div>  
    );
}
 
export default Home;