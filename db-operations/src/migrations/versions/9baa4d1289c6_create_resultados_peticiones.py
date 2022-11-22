"""create resultados-peticiones

Revision ID: 9baa4d1289c6
Revises: 419747f673f4
Create Date: 2022-11-22 12:30:41.976018

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '9baa4d1289c6'
down_revision = '419747f673f4'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('resultados-peticiones',
    sa.Column('nhc', mysql.VARCHAR(length=8), nullable=True),
    sa.Column('id_actoclinico', mysql.VARCHAR(length=12), nullable=True),
    sa.Column('id_proceso', mysql.VARCHAR(length=12), nullable=True),
    sa.Column('id_peticion', sa.Integer(), nullable=False),
    sa.Column('fecha_toma', sa.DateTime(), nullable=True),
    sa.Column('id_indicador', mysql.VARCHAR(length=64), nullable=True),
    sa.Column('cod_indicador', mysql.VARCHAR(length=64), nullable=True),
    sa.Column('nombre_indicador', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('id_unidad', mysql.VARCHAR(length=16), nullable=True),
    sa.Column('unidad', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_decimal', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_fecha', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_max_anormal', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_min_anormal', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_max_error', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_min_error', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_texto', mysql.LONGTEXT(), nullable=True),
    sa.Column('valor_estandar', mysql.LONGTEXT(), nullable=True),
    sa.Column('flag_anormalidad', mysql.LONGTEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id_peticion')
    )
    op.create_index(op.f('ix_resultados-peticiones_id_actoclinico'), 'resultados-peticiones', ['id_actoclinico'], unique=True)
    op.create_index(op.f('ix_resultados-peticiones_id_peticion'), 'resultados-peticiones', ['id_peticion'], unique=False)
    op.create_index(op.f('ix_resultados-peticiones_id_proceso'), 'resultados-peticiones', ['id_proceso'], unique=False)
    op.create_index(op.f('ix_resultados-peticiones_nhc'), 'resultados-peticiones', ['nhc'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_resultados-peticiones_nhc'), table_name='resultados-peticiones')
    op.drop_index(op.f('ix_resultados-peticiones_id_proceso'), table_name='resultados-peticiones')
    op.drop_index(op.f('ix_resultados-peticiones_id_peticion'), table_name='resultados-peticiones')
    op.drop_index(op.f('ix_resultados-peticiones_id_actoclinico'), table_name='resultados-peticiones')
    op.drop_table('resultados-peticiones')
    # ### end Alembic commands ###
