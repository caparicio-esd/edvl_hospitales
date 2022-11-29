from sqlalchemy import Boolean, Column, DateTime, Integer, Float
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import MEDIUMINT as MediumInt
from sqlalchemy.dialects.mysql import TEXT as Text
from sqlalchemy.dialects.mysql import LONGTEXT as LongText

from src.sql_models.base import Base


class ResultadosPeticiones(Base):
    """

    """
    __tablename__ = "resultados-peticiones"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True, unique=True)
    id_proceso = Column(Varchar(12), index=True)

    #
    id_peticion = Column(Varchar(12), index=True, primary_key=True)
    fecha_toma = Column(DateTime)
    
    # 
    id_indicador = Column(Integer)
    cod_indicador = Column(MediumInt)
    nombre_indicador = Column(Varchar(255))

    # 
    id_unidad = Column(MediumInt)
    unidad = Column(Varchar(30))
    
    # 
    valor_decimal = Column(Float)
    valor_fecha = Column(DateTime)
    valor_max_anormal = Column(Float)
    valor_min_anormal = Column(Float)
    valor_max_error = Column(Float)
    valor_min_error = Column(Float)
    valor_texto = Column(Varchar(64))
    valor_estandar = Column(Varchar(64))
    flag_anormalidad = Column(Varchar(5))


    def __repr__(self) -> str:
        return f"<ResultadosPeticiones(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            id_peticion=\"{self.id_peticion}\", fecha_toma=\"{self.fecha_toma}\", \...>"
