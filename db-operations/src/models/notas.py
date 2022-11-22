from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt
from sqlalchemy.dialects.mysql import TEXT as Text
from sqlalchemy.dialects.mysql import LONGTEXT as LongText

from src.models.base import Base


class Notas(Base):
    """

    """
    __tablename__ = "notas"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True,
                            primary_key=True, unique=True)
    id_proceso = Column(Varchar(12), index=True)

    #
    fecha_creacion = Column(DateTime)
    description = Column(Varchar(64))
    contenido = Column(Text)


    def __repr__(self) -> str:
        return f"<Notas(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            fecha_creacion=\"{self.fecha_creacion}\", description=\"{self.description}\", \...>"
