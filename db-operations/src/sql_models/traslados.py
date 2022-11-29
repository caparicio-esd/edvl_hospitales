from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt
from sqlalchemy.dialects.mysql import TEXT as Text
from sqlalchemy.dialects.mysql import LONGTEXT as LongText

from src.sql_models.base import Base


class Traslados(Base):
    """

    """
    __tablename__ = "traslados"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True,
                            primary_key=True, unique=True)
    id_proceso = Column(Varchar(12), index=True)

    #
    fecha_ingreso = Column(DateTime)
    fecha_atencion = Column(DateTime)
    fecha_alta = Column(DateTime)

    # 
    estado = Column(Varchar(25))
    tipo = Column(Varchar(17))
    
    fecha_ingreso_rec = Column(DateTime)
    fecha_ingreso_alta = Column(DateTime)
    bloque = Column(Text)
    recurso = Column(Varchar(50))
    ingreso_uci = Column(Boolean)


    def __repr__(self) -> str:
        return f"<Traslados(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            fecha_ingreso=\"{self.fecha_ingreso}\", estado=\"{self.estado}\", \...>"
