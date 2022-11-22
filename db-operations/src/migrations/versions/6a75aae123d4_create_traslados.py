"""create traslados

Revision ID: 6a75aae123d4
Revises: b19bcd020c58
Create Date: 2022-11-22 12:37:14.992977

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '6a75aae123d4'
down_revision = 'b19bcd020c58'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('traslados',
    sa.Column('nhc', mysql.VARCHAR(length=8), nullable=True),
    sa.Column('id_actoclinico', mysql.VARCHAR(length=12), nullable=False),
    sa.Column('id_proceso', mysql.VARCHAR(length=12), nullable=True),
    sa.Column('fecha_ingreso', sa.DateTime(), nullable=True),
    sa.Column('fecha_atencion', sa.DateTime(), nullable=True),
    sa.Column('fecha_alta', sa.DateTime(), nullable=True),
    sa.Column('estado', mysql.VARCHAR(length=25), nullable=True),
    sa.Column('tipo', mysql.VARCHAR(length=17), nullable=True),
    sa.Column('fecha_ingreso_rec', sa.DateTime(), nullable=True),
    sa.Column('fecha_ingreso_alta', sa.DateTime(), nullable=True),
    sa.Column('bloque', mysql.TEXT(), nullable=True),
    sa.Column('recurso', mysql.VARCHAR(length=50), nullable=True),
    sa.Column('ingreso_uci', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id_actoclinico')
    )
    op.create_index(op.f('ix_traslados_id_actoclinico'), 'traslados', ['id_actoclinico'], unique=True)
    op.create_index(op.f('ix_traslados_id_proceso'), 'traslados', ['id_proceso'], unique=False)
    op.create_index(op.f('ix_traslados_nhc'), 'traslados', ['nhc'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_traslados_nhc'), table_name='traslados')
    op.drop_index(op.f('ix_traslados_id_proceso'), table_name='traslados')
    op.drop_index(op.f('ix_traslados_id_actoclinico'), table_name='traslados')
    op.drop_table('traslados')
    # ### end Alembic commands ###
