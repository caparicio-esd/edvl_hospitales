from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt
from sqlalchemy.dialects.mysql import TEXT as Text
from sqlalchemy.dialects.mysql import LONGTEXT as LongText

from src.models.base import Base


class Proceso(Base):
    """

    """
    __tablename__ = "proceso"

    # global fields
    # global fields
    nhc = Column(Varchar(8), index=True)
    id_proceso = Column(Varchar(12), primary_key=True, index=True )

    #
    desc_proceso = Column(Varchar(300))
    servicio_proceso = Column(Varchar(12))
    fecha_ini_proceso = Column(DateTime)
    fecha_fin_proceso = Column(DateTime)
    fusionado_a = Column(Varchar(12))

    id_estado_proceso = Column(TinyInt)
    estado_proceso = Column(Varchar(9))
    id_proceso_padre = Column(Integer)
    id_tipo_proceso = Column(Integer)
    tipo_proceso = Column(Varchar(255))

    id_ubicacion_proce = Column(Varchar(255))
    restringido = Column(Boolean)
    restringido = Column(Boolean)
    restringido = Column(Boolean)
   

    def __repr__(self) -> str:
        return f"<Proceso(\
            nhc=\"{self.nhc}\", id_proceso=\"{self.id_proceso}\", fusionado_a=\"{self.fusionado_a}\", \
            fecha_ini_proceso=\"{self.fecha_ini_proceso}\", fecha_fin_proceso=\"{self.fecha_fin_proceso}\", \...>"
