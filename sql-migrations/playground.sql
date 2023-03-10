-- 
-- check please: 
-- all limits are off
-- all names of table are right _v2
-- the drop table statemenst are off
-- 
-- 
-- 
-- 
-- 
-- sacar actos clinicos
-- drop table if exists trans__acto_clinico;
create table trans__acto_clinico_v2
select
    NHC,
    ID_ACTOCLINICO,
    ID_PROCESO,
    NS,
    TIPO,
    ID_GRAVEDAD
from
    acto_clinico -- limit
    --     10 -- 
;

-- 
-- 
-- 
-- 
-- 
-- sacar pacientes
-- drop table if exists trans__paciente;
create table trans__paciente_v2
select
    NHC,
    SEX,
    DATEOFBIRTH
from
    paciente -- limit
    --     10 -- 
;

-- 
-- 
-- 
-- 
-- 
-- 
-- drop table if exists trans__resultados_peticiones_transposed_v2;
create table trans__resultados_peticiones_transposed_v2
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
            resultados_peticiones
        where
            NOMBRE_INDICADOR in (
                SELECT
                    value
                FROM
                    trans__resultados_peticiones_valores
            ) -- limit
            --     10 -- 
    ) as q
group by
    NHC,
    ID_PROCESO,
    ID_ACTO_CLINICO,
    ID_PETICION,
    FECHA_TOMA -- limit
    --     10 -- 
;

-- 
-- 
-- 
-- 
-- 
-- 
-- drop table if exists trans__traslados;
create table trans__traslados_v2
select
    NHC,
    ID_PROCESO,
    ID_ACTOCLINICO,
    F_ING_REC as FECHA_TRASLADO,
    TIPO,
    RECURSO,
    INGRESO_UCI as UCI
from
    traslados -- limit
    --     10 -- 
;

-- 
-- 
-- 
-- 
-- 
-- 
-- join y a rezar
-- drop table if exists trans__join;
create table trans__join_v2
select
    trans__paciente_v2.NHC,
    trans__paciente_v2.SEX,
    trans__paciente_v2.DATEOFBIRTH,
    -- 
    trans__acto_clinico_v2.ID_PROCESO,
    trans__acto_clinico_v2.ID_ACTOCLINICO,
    trans__acto_clinico_v2.NS,
    trans__acto_clinico_v2.TIPO,
    trans__acto_clinico_v2.ID_GRAVEDAD,
    -- 
    trans__resultados_peticiones_transposed_v2.ID_PETICION as ID_RELATED_ANALYTICS,
    trans__resultados_peticiones_transposed_v2.FECHA_TOMA as RELATED_ANALYTICS_DATE,
    trans__resultados_peticiones_transposed_v2.field_names as RELATED_ANALYTICS_FIELD_NAMES,
    trans__resultados_peticiones_transposed_v2.field_values as RELATED_ANALYTICS_FIELD_VALUES,
    trans__resultados_peticiones_transposed_v2.field_is_normal as RELATED_ANALYTICS_FIELD_ANORMALITY,
    -- 
    trans__traslados_v2.FECHA_TRASLADO as TRASLADO_DATE,
    trans__traslados_v2.TIPO as TRASLADO_TYPE,
    trans__traslados_v2.RECURSO as TRASLADO_TO,
    trans__traslados_v2.UCI as TRASLADO_UCI
from
    trans__traslados_v2
    join trans__paciente_v2 ON trans__paciente_v2.NHC = trans__traslados_v2.NHC
    join trans__acto_clinico_v2 ON trans__acto_clinico_v2.ID_ACTOCLINICO = trans__traslados_v2.ID_ACTOCLINICO
    join trans__resultados_peticiones_transposed_v2 ON trans__resultados_peticiones_transposed_v2.ID_PROCESO = trans__traslados_v2.ID_PROCESO -- limit
    --     10 -- 
;

-- drop table trans__acto_clinico_v2;
-- drop table trans__paciente_v2;
-- drop table trans__resultados_peticiones_transposed_v2;
-- drop table trans__traslados_v2;
-- drop table trans__join_v2;