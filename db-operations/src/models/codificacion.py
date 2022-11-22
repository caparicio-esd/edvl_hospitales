from sqlalchemy import Boolean, Column, DateTime, Integer, SmallInteger
from sqlalchemy.dialects.mysql import CHAR as Char
from sqlalchemy.dialects.mysql import VARCHAR as Varchar
from sqlalchemy.dialects.mysql import TINYINT as TinyInt

from src.models.base import Base


class Codificacion(Base):
    """

    """
    __tablename__ = "codificacion"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True,
                            primary_key=True, unique=True)
    id_proceso = Column(Varchar(12), index=True)

    #
    id_codificacion = Column(Integer)
    nivel_codificacion = Column(Varchar(2))
    tipo_codificacion = Column(Varchar(2))

    #
    principal = Column(Boolean)
    secuencia = Column(SmallInteger)
    fecha_cod = Column(DateTime)
    hora_cod = Column(Varchar(5))
    tipo_acto = Column(Varchar(17))
    serv_cod = Column(Varchar(6))

    #
    lateralidad = Column(Char(length=1))
    tipo_poa = Column(Varchar(2))

    #
    codigo = Column(Varchar(16))
    desc_cod = Column(Varchar(255))
    cod_grupo = Column(Varchar(16))
    desc_grupo = Column(Varchar(255))

    #
    id_catalogo = Column(TinyInt)
    desc_catalogo = Column(Varchar(16))
    es_cie10 = Column(Boolean)
    cmbd = Column(Boolean)

    #
    id_tipo_codigo = Column(Varchar(2))
    morfologia = Column(Char(2))

    # 
    partos = Column(Boolean)
    ce = Column(Boolean)
    rn_patologico = Column(Boolean)
    abortos = Column(Boolean)

    def __repr__(self) -> str:
        return f"<Codificacion(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            id_codificacion=\"{self.id_codificacion}\", nivel_codificacion=\"{self.nivel_codificacion}\", \...>"
