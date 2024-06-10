SELECT
  d.id,
  b.nombre,
  e.modelopopular,
  d.fecha,
  d.descripcionfalla,
  d.costopresupuesto
FROM
  (
    (
      (
        diagnostico d
        JOIN equipos e ON ((e.id = d.idequipo))
      )
      JOIN brandequipo b ON ((b.id = e.idbrandequipo))
    )
    LEFT JOIN reparacion_diagnostico rd ON ((rd.iddiagnostico = d.id))
  )
GROUP BY
  d.id,
  b.nombre,
  e.modelopopular,
  d.fecha,
  d.descripcionfalla,
  d.costopresupuesto
HAVING
  (count(rd.iddiagnostico) = 0);