-- boolean coalescence...
-- datetime conversion...


-- 
-- 
-- 
-- renaming tables
RENAME TABLE 
    acto_clinico TO original__acto_clinico,
    codificacion TO original__codificacion,
    formularios TO original__formularios,
    informes TO original__informes,
    notas TO original__notas,
    paciente TO original__paciente,
    proceso TO original__proceso,
    resultados_peticiones TO original__resultados_peticiones,
    traslados TO original__traslados;


-- acto_clinico
CREATE TABLE IF NOT EXISTS `acto_clinico` SELECT * FROM `original__acto_clinico`
ALTER TABLE `acto_clinico` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_ACTOCLINICO VARCHAR(12) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ESTADO VARCHAR(16),
    MODIFY FECHA_INICIO datetime,
    MODIFY FECHA_FIN datetime,
    MODIFY NS VARCHAR(6),
    MODIFY TIPO VARCHAR(17),
    MODIFY ID_GRAVEDAD smallint,
    MODIFY ID_MOTIVO_ALTA smallint,
    MODIFY MOTIVO_ALTA VARCHAR(64),
    MODIFY ID_MOTIVO_INGRESO smallint,
    MODIFY MOTIVO_INGRESO VARCHAR(64),
    MODIFY ID_MOTIVO_LLEGADA smallint,
    MODIFY MOTIVO_LLEGADA VARCHAR(64),
    MODIFY COD_PRESTACION VARCHAR(10),
    MODIFY DESC_PRESTACION VARCHAR(80);
	

-- codificacion
CREATE TABLE IF NOT EXISTS `codificacion` SELECT * FROM `original__codificacion`
ALTER TABLE `codificacion` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTO_CLINICO VARCHAR(12) NOT NULL,
    MODIFY ID_CODIFICACION int,
    MODIFY NIVEL_CODIFICACION VARCHAR(2),
    MODIFY TIPO_CODIFICACION VARCHAR(2),
    MODIFY PRINCIPAL boolean, -- char(1)
    MODIFY SECUENCIA smallint,
    MODIFY FECHA_COD datetime,
    MODIFY HORA_COD VARCHAR(5), -- merge as datetime
    MODIFY TIPO_ACTO VARCHAR(17),
    MODIFY SERV_COD VARCHAR(6),
    MODIFY LATERALIDAD CHAR(1),
    MODIFY TIPO_POA VARCHAR(2),
    MODIFY CODIGO VARCHAR(16),
    MODIFY DESC_COD VARCHAR(255),
    MODIFY COD_GRUPO VARCHAR(16),
    MODIFY DESC_GRUPO VARCHAR(255),
    MODIFY ID_CATALOGO tinyint,
    MODIFY DESC_CATALOGO VARCHAR(16),
    MODIFY ES_CIE10 CHAR(1),
    MODIFY CMBD CHAR(1),
    MODIFY ID_TIPO_CODIGO VARCHAR(2),
    MODIFY MORFOLOGIA CHAR(1),
    MODIFY PARTOS boolean, -- char(1)
    MODIFY CESAREAS boolean, -- char(1)
    MODIFY RN_PATOLOGICO boolean, -- char(1)
    MODIFY ABORTOS boolean; -- char(1)
	

-- formularios
-- ojo que hay que hacerlo con limites... innodb_buffer_pool_size que es enorme esta tabla...
-- terminar (limit 1000)
CREATE TABLE IF NOT EXISTS `formularios` SELECT * FROM `original__formularios` LIMIT 0 1000
ALTER TABLE `formularios` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTO_CLINICO VARCHAR(12), 
    MODIFY ID_FORMULARIO VARCHAR(12) NOT NULL,
    MODIFY ID_TOMA VARCHAR(12) NOT NULL,
    MODIFY FORMULARIO VARCHAR(100),
    MODIFY FECHA_TOMA datetime,
    MODIFY COD_INDICADOR VARCHAR(20),
    MODIFY INDICADOR VARCHAR(255),
    MODIFY VALOR text,
    MODIFY FECHA_DESDE datetime,
    MODIFY FECHA_HASTA datetime,
    MODIFY FECHA_DESDE_1 datetime,
    MODIFY FECHA_HASTA_1 datetime;


-- informes
CREATE TABLE IF NOT EXISTS `informes` SELECT * FROM `original__informes` LIMIT 0 1000
ALTER TABLE `informes` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTO_CLINICO VARCHAR(12), -- hay formularios que no tienen relación con acto_clinico 
    MODIFY ID int,
    MODIFY FECHACREACION datetime,
    MODIFY RUTA VARCHAR(64),
    MODIFY TIPO VARCHAR(64),
    MODIFY NAME VARCHAR(255),
    MODIFY ULTIMO_EDITOR VARCHAR(16),
    MODIFY INFORME longtext;


-- notas
CREATE TABLE IF NOT EXISTS `notas` SELECT * FROM `original__notas`;
ALTER TABLE `notas` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTOCLINICO VARCHAR(12), -- hay formularios que no tienen relación con acto_clinico 
    MODIFY FECHACREACION datetime,
    MODIFY DESCRIPTION VARCHAR(64),
    MODIFY CONTENIDO text;


-- paciente2
CREATE TABLE IF NOT EXISTS `paciente` SELECT * FROM `original__paciente` LIMIT 1000
ALTER TABLE `paciente` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY POSTALCODE VARCHAR(12),
    MODIFY AREA_SALUD VARCHAR(2),
    MODIFY CENTRO_REF VARCHAR(8),
    MODIFY CITY int,
    MODIFY COMUN_AUT VARCHAR(2),
    MODIFY STATE VARCHAR(2),
    MODIFY FOREIGNPATIENT CHAR(1), -- bool coalescence
    MODIFY SEX CHAR(1),
    MODIFY DATEOFBIRTH datetime,
    MODIFY PENDIENTE_EXITUS CHAR(1), -- bool coalescence
    MODIFY DEATHINDICATOR CHAR(1), -- bool coalescence
    MODIFY CODIGO_CIUDADANO VARCHAR(5),
    MODIFY ID_TIPO_CIUDADANO smallint,
    MODIFY TIPO_PACIENTE VARCHAR(20),
    MODIFY FECHA_PENDIENTE_EXITUS datetime,
    MODIFY FECHA_EXITUS datetime;


-- proceso2
CREATE TABLE IF NOT EXISTS `proceso` SELECT * FROM `original__proceso`
ALTER TABLE `proceso` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY DESC_PROCESO VARCHAR(300),
    MODIFY SERVICIO_PROCESO VARCHAR(12),
    MODIFY FEC_INI_PROCESO datetime,
    MODIFY FECHA_FIN_PROCESO datetime,
    MODIFY FUSIONADO_A VARCHAR(12),
    MODIFY ID_ESTADO_PROCESO tinyint,
    MODIFY ESTADO_PROCESO VARCHAR(9),
    MODIFY ID_PROCESO_PADRE int,
    MODIFY ID_TIPO_PROCESO int,
    MODIFY TIPOPROCESO VARCHAR(255),
    MODIFY ID_UBICACION_PROCE VARCHAR(255),
    MODIFY RESTRINGIDO CHAR(1), -- bool
    MODIFY REABIERTO CHAR(1), -- bool
    MODIFY FECHA_REAPER_PROCESO datetime;


-- resultados_peticiones2
CREATE TABLE IF NOT EXISTS `resultados_peticiones` SELECT * FROM `original__resultados_peticiones`
ALTER TABLE `resultados_peticiones` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTO_CLINICO VARCHAR(12),
    MODIFY ID_PETICION VARCHAR(12),
    MODIFY FECHA_TOMA datetime,
    MODIFY ID_INDICADOR int,
    MODIFY COD_INDICADOR int,
    MODIFY NOMBRE_INDICADOR VARCHAR(255),
    MODIFY ID_UNIDAD int,
    MODIFY UNIDAD VARCHAR(30),
    MODIFY VALOR_DECIMAL float,
    MODIFY VALOR_FECHA datetime,
    MODIFY VALOR_MAX_ANORMAL float,
    MODIFY VALOR_MIN_ANORMAL float,
    MODIFY VALOR_MAX_ERROR float,
    MODIFY VALOR_MIN_ERROR float,
    MODIFY VALOR_TEXTO VARCHAR(128),
    MODIFY VALOR_ESTANDAR VARCHAR(128),
    MODIFY FLAG_ANORMALIDAD VARCHAR(5);


-- traslados2
CREATE TABLE IF NOT EXISTS `traslados` SELECT * FROM `original__traslados` LIMIT 0 1000
ALTER TABLE `traslados` 
	MODIFY NHC VARCHAR(8) NOT NULL,
    MODIFY ID_PROCESO VARCHAR(12) NOT NULL,
    MODIFY ID_ACTOCLINICO VARCHAR(12),
    MODIFY FECHA_INGRESO datetime,
    MODIFY FECHA_ATENCION datetime,
    MODIFY FECHA_ALTA datetime,
    MODIFY ESTADO VARCHAR(25),
    MODIFY TIPO VARCHAR(17),
    MODIFY F_ING_REC datetime,
    MODIFY F_ALTA_REC datetime,
    MODIFY BLOQUE text,
    MODIFY RECURSO VARCHAR(50),
    MODIFY INGRESO_UCI CHAR(1); -- bool



-- 
-- 
-- reindex all...

-- acto_clinico
ALTER TABLE `acto_clinico` 
    ADD PRIMARY KEY (NHC, ID_ACTOCLINICO, ID_PROCESO);
ALTER TABLE `acto_clinico` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_ACTOCLINICO (ID_ACTOCLINICO),
    ADD INDEX ID_PROCESO (ID_PROCESO);


-- codificacion
-- ALTER TABLE `codificacion` 
--     ADD PRIMARY KEY (ID_CODIFICACION, SECUENCIA);
-- no se puede crear porque secuencia es NA (tendíamos que cambiar esto)
ALTER TABLE `codificacion` 
    ADD INDEX NHC (NHC),
    ADD INDEX PROCESO (PROCESO),
    ADD INDEX ID_ACTO_CLINICO (ID_ACTO_CLINICO),
    ADD INDEX ID_CODIFICACION (ID_CODIFICACION);


-- formularios
ALTER TABLE `formularios` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO),
    ADD INDEX ID_ACTO_CLINICO (ID_ACTO_CLINICO),
    ADD INDEX ID_FORMULARIO (ID_FORMULARIO), 
    ADD INDEX ID_TOMA (ID_TOMA);

ALTER TABLE `formularios` 
    ADD PRIMARY KEY (ID_FORMULARIO, ID_TOMA, COD_INDICADOR);


-- informes
ALTER TABLE `informes` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO),
    ADD INDEX ID_ACTO_CLINICO (ID_ACTO_CLINICO),
    ADD INDEX ID (ID);

-- no se puede hacer primary key porque tiene duplicados...
ALTER TABLE `informes` 
    ADD PRIMARY KEY (ID);


-- notas
ALTER TABLE `notas` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO),
    ADD INDEX ID_ACTOCLINICO (ID_ACTOCLINICO);

ALTER TABLE `notas` 
    ADD PRIMARY KEY (NHC, ID_PROCESO, ID_ACTOCLINICO);


-- paciente
ALTER TABLE `paciente` 
    ADD INDEX NHC (NHC);

ALTER TABLE `paciente` 
    ADD PRIMARY KEY (NHC);


-- proceso
ALTER TABLE `proceso` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO);

ALTER TABLE `proceso` 
    ADD PRIMARY KEY (ID_PROCESO);


-- resultados_peticiones
ALTER TABLE `resultados_peticiones` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO),
    ADD INDEX ID_ACTO_CLINICO (ID_ACTO_CLINICO),
    ADD INDEX ID_PETICION (ID_PETICION),
    ADD INDEX ID_INDICADOR (ID_INDICADOR);

ALTER TABLE `resultados_peticiones` 
    ADD PRIMARY KEY (ID_PETICION, ID_INDICADOR);


-- traslados
ALTER TABLE `traslados` 
    ADD INDEX NHC (NHC),
    ADD INDEX ID_PROCESO (ID_PROCESO),
    ADD INDEX ID_ACTOCLINICO (ID_ACTOCLINICO);

ALTER TABLE `traslados` 
    ADD PRIMARY KEY (NHC, ID_PROCESO, ID_ACTOCLINICO, F_ING_REC);




