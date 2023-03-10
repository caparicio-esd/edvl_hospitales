create table trans__resultados_peticiones_transposed
select
    NHC,
    ID_PROCESO,
    ID_ACTO_CLINICO,
    ID_PETICION,
    FECHA_TOMA,
    GROUP_CONCAT(
        COALESCE(NOMBRE_INDICADOR, "NULL") SEPARATOR ', '
    ) as field_names,
    GROUP_CONCAT(
        COALESCE(VALOR_NORMALIZADO, "NULL") SEPARATOR ', '
    ) as field_values,
    GROUP_CONCAT(
        COALESCE(FLAG_ANORMALIDAD_NORMALIZADO, "NULL") SEPARATOR ', '
    ) as field_is_normal
from
    (
        select
            NHC,
            ID_PROCESO,
            ID_ACTO_CLINICO,
            ID_PETICION,
            FECHA_TOMA,
            NOMBRE_INDICADOR,
            FLAG_ANORMALIDAD,
            case
                when FLAG_ANORMALIDAD = "N" THEN 0
                when FLAG_ANORMALIDAD IS NULL THEN 0
                else 1
            end as FLAG_ANORMALIDAD_NORMALIZADO,
            case
                when VALOR_TEXTO = "Negativo" THEN CONVERT(0, FLOAT)
                when VALOR_TEXTO = "Positivo" THEN CONVERT(1, FLOAT)
                when VALOR_TEXTO = "" THEN NULL
                when VALOR_TEXTO = "0.0" THEN CONVERT(0, FLOAT)
                when VALOR_TEXTO REGEXP '-?[0-9]+(\.[0-9]+)?' THEN CONVERT(
                    REGEXP_SUBSTR(VALOR_TEXTO, '-?[0-9]+(\.[0-9]+)?'),
                    FLOAT
                )
                else NULL
            end as VALOR_NORMALIZADO,
            VALOR_TEXTO
        from
            resultados_peticiones_sm
        where
            NOMBRE_INDICADOR in (
                SELECT
                    value
                FROM
                    trans__resultados_peticiones_valores
            )
    ) as q
group by
    NHC,
    ID_PROCESO,
    ID_ACTO_CLINICO,
    ID_PETICION,
    FECHA_TOMA
LIMIT
    100;