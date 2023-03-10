
select
    ID_ACTOCLINICO,
    FECHA_INGRESO,
    FECHA_ATENCION,
    FECHA_ALTA,
    RECURSO,
    BLOQUE
from
    traslados_sm
where
    ID_ACTOCLINICO = "Mjk3NTc3Mw=="
limit
    10;

-- 
-- 
select
    distinct TIPO
from
    traslados_sm;

-- 
--
create table trans__traslados
select
    NHC,
    ID_PROCESO,
    ID_ACTOCLINICO,
    F_ING_REC,
    TIPO,
    RECURSO,
    CASE 
        WHEN INGRESO_UCI = "S" THEN 1
        ELSE 0
    END as UCI
from
    traslados_sm;

-- 
--
select
    count(INGRESO_UCI)
from
    traslados_sm
where 
    TIPO not in ("HOSP_DIA_QUIR", "NEONATOLOGIA")
group by
    INGRESO_UCI;