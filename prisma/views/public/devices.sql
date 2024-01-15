SELECT
  eq.id,
  eq.modelopopular AS model,
  b.nombre AS brand,
  c.nombre AS company
FROM
  (
    (
      equipos eq
      JOIN brandequipo b ON ((b.id = eq.idbrandequipo))
    )
    JOIN companyequipo c ON ((c.id = b.idcompanyequipo))
  );