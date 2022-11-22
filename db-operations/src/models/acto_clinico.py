from sqlalchemy import Column, DateTime, PrimaryKeyConstraint, SmallInteger, String
from src.models.base import Base
from sqlalchemy.dialects.mysql import VARCHAR as Varchar


class ActoClinico(Base):
    """

    """
    __tablename__ = "acto-clinico"

    # global fields
    nhc = Column(Varchar(8), index=True)
    id_actoclinico = Column(Varchar(12), index=True, primary_key = True, unique = True)
    id_proceso = Column(Varchar(12), index=True )

    #
    estado = Column(Varchar(16))
    fecha_inicio = Column(DateTime(timezone=False))
    fecha_fin = Column(DateTime(timezone=False))
    ns = Column(Varchar(6))
    tipo = Column(Varchar(17))
    id_gravedad = Column(SmallInteger)

    #
    id_motivo_alta = Column(SmallInteger)
    motivo_alta = Column(Varchar(64))
    id_motivo_ingreso = Column(SmallInteger)
    motivo_ingreso = Column(Varchar(64))
    id_motivo_llegada = Column(SmallInteger)
    motivo_llegada = Column(Varchar(64))

    #
    cod_prestacion = Column(Varchar(10))
    desc_prestacion = Column(Varchar(80))


    def __repr__(self) -> str:
        return f"<ActoClinico(\
            nhc=\"{self.nhc}\", id_actoclinico=\"{self.id_actoclinico}\", id_proceso=\"{self.id_proceso}\", \
            estado=\"{self.estado}\", fecha_inicio=\"{self.fecha_inicio}\", \...>"
