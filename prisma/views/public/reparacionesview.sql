SELECT
  r.id,
  r.uuidsearch AS uuid,
  c.nombre,
  c.apellido,
  c.telefono,
  r.fecharecepcion AS recepcion,
  r.fechaentrega AS entrega,
  e.modelopopular AS modelo,
  b.nombre AS marca,
  d.descripcionfalla AS falla,
  d.sugerenciareparacion AS diagnostico,
  d.costopresupuesto AS presupuesto,
  r.costototal AS total,
  r.idempresa AS empresa
FROM
  (
    (
      (
        (
          (
            (
              (
                reparacion_diagnostico rd
                JOIN reparacion r ON ((r.id = rd.idreparacion))
              )
              JOIN diagnostico d ON ((d.id = rd.iddiagnostico))
            )
            JOIN equipos e ON ((e.id = d.idequipo))
          )
          JOIN brandequipo b ON ((b.id = e.idbrandequipo))
        )
        JOIN categoria_equipo ce ON ((ce.id = e.idcategoriaequipo))
      )
      JOIN cliente c ON ((c.id = r.idcliente))
    )
    JOIN empresa em ON ((em.id = r.idempresa))
  );