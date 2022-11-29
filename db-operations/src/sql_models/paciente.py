from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt
from sqlalchemy.dialects.mysql import TEXT as Text
from sqlalchemy.dialects.mysql import LONGTEXT as LongText

from src.sql_models.base import Base


class Paciente(Base):
    """

    """
    __tablename__ = "paciente"

    # global fields
    nhc = Column(Varchar(8), primary_key=True, index=True)

    #
    postal_code = Column(Varchar(12))
    area_salud = Column(Varchar(2))
    centro_ref = Column(Varchar(8))
    city = Column(Integer)
    comun_aut = Column(Varchar(2))
    state = Column(Varchar(2))
    foreign_patient = Column(Boolean)
    sex = Column(Char(1))
    date_of_birth = Column(DateTime)
    pendiente_exitus = Column(Boolean)
    death_indicator = Column(Boolean)
  
#   
    codigo_ciudadano = Column(Varchar(5))
    id_tipo_ciudadano = Column(SmallInteger)
    tipo_paciente = Column(Varchar(20))

# 
    fecha_pendiente_exitus = Column(DateTime)
    fecha_exitus = Column(DateTime)


    def __repr__(self) -> str:
        return f"<Paciente(\
            nhc=\"{self.nhc}\", postal_code=\"{self.postal_code}\", sex=\"{self.sex}\", \
            pendiente_exitus=\"{self.pendiente_exitus}\", death_indicator=\"{self.death_indicator}\", \...>"
