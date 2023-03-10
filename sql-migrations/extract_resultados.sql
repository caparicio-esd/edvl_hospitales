create if not exists table trans__resultados_peticiones_norm (
    NHC varchar(8),
    ID_PROCESO varchar(12),
    ID_ACTO_CLINICO varchar(12),
    ID_PETICION varchar(12),
    FECHA_TOMA datetime,
    NOMBRE_INDICADOR varchar(255),
    FLAG_ANORMALIDAD varchar(5),
    FLAG_ANORMALIDAD_NORMALIZADO tinyint,
    VALOR_NORMALIZADO float,
    VALOR_TEXTO varchar(64)
);




-- insert into
--     trans__resultados_peticiones_norm
drop table if exists trans__resultados_peticiones_norm;
create table trans__resultados_peticiones_norm
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