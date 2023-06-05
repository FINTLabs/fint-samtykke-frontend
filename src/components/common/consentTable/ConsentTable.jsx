import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 350,
  },
  root: {
    "& > *": {
      // margin: theme.spacing(1),
    },
  },
  tableRow: {
    borderBottom: `1px solid rgba(${theme.featureColor2}, 01)`,
  },
  tableHeader: {
    borderBottom: `2px solid rgba(${theme.featureColor1}, 1) !important`,
  },
}));

const ConsentTable = ({
  consents,
  handleChange,
  isFetching,
  createConsent,
}) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const skeletonArray = Array(5).fill("");

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "55%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <TableHead className={classes.tableHeader}>
            <TableRow className={classes.tableRow}>
              <TableCell align="left">
                <strong>Tjeneste</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Personopplysning</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Formål</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Samtykke</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isFetching &&
              consents.length === 0 &&
              skeletonArray.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="left">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="left">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="left">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))}

            {consents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((consent, i) => (
                <TableRow
                  key={consent.systemIdValue}
                  className={classes.tableRow}
                >
                  <TableCell align="left">{consent.processorName}</TableCell>
                  <TableCell align="left">{consent.personalDataName}</TableCell>
                  <TableCell align="left">
                    {consent.processing.formal}
                  </TableCell>
                  <TableCell align="center">
                    {(consent.expirationDate === null ||
                      consent.active === undefined) && (
                      <Switch
                        checked={consent.active}
                        onChange={() => createConsent(i, consent)}
                        disabled={isFetching}
                        name="switch"
                      />
                    )}
                    {consent.expirationDate !== null &&
                      (consent.active === true || consent.active === false) && (
                        <Switch
                          checked={consent.active}
                          color="primary"
                          onChange={(e) => handleChange(e, i, consent)}
                          disabled={isFetching}
                          name="switch"
                        />
                      )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {consents.length > 10 && (
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={consents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default ConsentTable;
