"""create informes

Revision ID: 8fa9893fb4b5
Revises: 65c5db089326
Create Date: 2022-11-22 12:08:06.142158

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '8fa9893fb4b5'
down_revision = '65c5db089326'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('informes',
    sa.Column('nhc', mysql.VARCHAR(length=8), nullable=True),
    sa.Column('id_actoclinico', mysql.VARCHAR(length=12), nullable=False),
    sa.Column('id_proceso', mysql.VARCHAR(length=12), nullable=True),
    sa.Column('id', sa.Integer(), nullable=True),
    sa.Column('fecha_creacion', sa.DateTime(), nullable=True),
    sa.Column('ruta', mysql.VARCHAR(length=64), nullable=True),
    sa.Column('tipo', mysql.VARCHAR(length=64), nullable=True),
    sa.Column('name', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('ultimo_editor', mysql.VARCHAR(length=16), nullable=True),
    sa.Column('informe', mysql.LONGTEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id_actoclinico')
    )
    op.create_index(op.f('ix_informes_id'), 'informes', ['id'], unique=False)
    op.create_index(op.f('ix_informes_id_actoclinico'), 'informes', ['id_actoclinico'], unique=True)
    op.create_index(op.f('ix_informes_id_proceso'), 'informes', ['id_proceso'], unique=False)
    op.create_index(op.f('ix_informes_nhc'), 'informes', ['nhc'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_informes_nhc'), table_name='informes')
    op.drop_index(op.f('ix_informes_id_proceso'), table_name='informes')
    op.drop_index(op.f('ix_informes_id_actoclinico'), table_name='informes')
    op.drop_index(op.f('ix_informes_id'), table_name='informes')
    op.drop_table('informes')
    # ### end Alembic commands ###
