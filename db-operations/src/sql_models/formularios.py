from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt
from sqlalchemy.dialects.mysql import TEXT as Text

from src.sql_models.base import Base


class Formularios(Base):
    """

    """
    __tablename__ = "formularios"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True,
                            primary_key=True, unique=True)
    id_proceso = Column(Varchar(12), index=True)

    #
    id_formulario = Column(Varchar(12), index=True)
    id_toma = Column(Varchar(12))
    formulario = Column(Varchar(100))

    #
    fecha_toma = Column(DateTime)
    cod_indicador = Column(Varchar(20))
    indicador = Column(Varchar(255))
    valor = Column(Text)
   
    # 
    fecha_desde = Column(DateTime)
    fecha_hasta = Column(DateTime)
    fecha_desde_1 = Column(DateTime)
    fecha_hasta_1 = Column(DateTime)


    def __repr__(self) -> str:
        return f"<Formularios(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            id_formulario=\"{self.id_formulario}\", id_toma=\"{self.id_toma}\", \...>"
