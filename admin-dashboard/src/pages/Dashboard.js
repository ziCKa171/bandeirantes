import React, { useEffect, useState } from 'react';
import { Box, Container, Dashboard as MuiDashboard, Grid, Paper, Typography, Card, CardContent, LineChart, BarChart, PieChart } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const token = localStorage.getItem('token');
      
      const res = await axios.get(`${API_URL}/relatorios/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setDados(res.data);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  const dataVendas = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    datasets: [{
      label: 'Vendas (R$)',
      data: dados?.vendiasPorDia || [0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: '#3B82F6',
      tension: 0.1
    }]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard Bandeirantes 📊
      </Typography>

      {/* KPIs */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Pedidos Hoje
              </Typography>
              <Typography variant="h5" sx={{ color: '#3B82F6', fontWeight: 'bold' }}>
                {dados?.pedidosHoje || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Receita Hoje
              </Typography>
              <Typography variant="h5" sx={{ color: '#10B981', fontWeight: 'bold' }}>
                R$ {dados?.receitaHoje?.toFixed(2) || '0.00'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Clientes Ativos
              </Typography>
              <Typography variant="h5" sx={{ color: '#F59E0B', fontWeight: 'bold' }}>
                {dados?.clientesAtivos || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Entregas Pendentes
              </Typography>
              <Typography variant="h5" sx={{ color: '#EF4444', fontWeight: 'bold' }}>
                {dados?.entregasPendentes || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gráficos */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Vendas da Semana
            </Typography>
            <Line data={dataVendas} options={{ responsive: true }} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Produto Mais Vendido
            </Typography>
            <Typography variant="h4" sx={{ color: '#3B82F6', fontWeight: 'bold', my: 2 }}>
              {dados?.produtoMaisVendido?.nome}
            </Typography>
            <Typography color="textSecondary">
              {dados?.produtoMaisVendido?.quantidade} unidades
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
